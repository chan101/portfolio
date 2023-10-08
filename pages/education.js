import MyVerticalTimeline from "@/components/MyVerticalTimeLine";
import educationData from "@/data/education.json"

const Education = () => {

    return(

        <MyVerticalTimeline educationData={educationData}/>
    )
}
export default Education;