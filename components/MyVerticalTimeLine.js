import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, WorkHistory, LocationOn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Tooltip, Typography } from "@mui/material";
import WorkDetails from "./WorkExpComps/WorkDetails";

const MyVerticalTimeline = (props) => {
  const theme = useTheme();

  return (
    <VerticalTimeline animate={false} lineColor={theme.palette.secondary.main}>
      {props.educationData &&
        props.educationData.map((data) => (
          <VerticalTimelineElement
            contentArrowStyle={{color: theme.palette.secondary.main}}
            iconOnClick={() => {
              window.open(data.url, "_blank");
            }}
            date={data.date}
            contentStyle={{ background: theme.palette.custom2.main }}
            iconStyle={{
              background: theme.palette.secondary.main,
              color: "#fff",
            }}
            icon={
              <Tooltip title="Visit website">
                <School />
              </Tooltip>
            }
          >
            <h3 className="vertical-timeline-element-title">
              {data.Institution}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                marginTop: "5px",
              }}
            >
              <LocationOn fontSize="12px" sx={{ marginRight: "5px" }} />
              <Typography variant="p" fontSize="12px">
                {data.location}
              </Typography>
            </div>
            <p>{data.Course}</p>
            <p><i>{data.grade}</i></p>
          </VerticalTimelineElement>
        ))}
      {props.workData &&
        props.workData.map((data) => (
          <VerticalTimelineElement
            iconOnClick={() => {
              window.open(data.url, "_blank");
            }}
            date={data.date}
            contentStyle={{ background: theme.palette.custom2.main }}
            iconStyle={{
              background: theme.palette.secondary.main,
              color: "#fff",
            }}
            icon={
              <Tooltip title="Visit website">
                <WorkHistory />
              </Tooltip>
            }
          >
            <h3 className="vertical-timeline-element-title">
              {data.Organisation}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                marginTop: "5px",
              }}
            >
              <LocationOn fontSize="12px" sx={{ marginRight: "5px" }} />
              <Typography variant="p" fontSize="12px">
                {data.location}
              </Typography>
            </div>
            <p>{data.Role}</p>
            <WorkDetails workDetails={data.workDetails}/>
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
};

export default MyVerticalTimeline;
