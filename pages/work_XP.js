import MyVerticalTimeline from "@/components/MyVerticalTimeLine";
import workData from "@/data/work.json"


const work_XP = () => {
 

  return (
    <MyVerticalTimeline workData={workData}/>
  )
};

export default work_XP;
