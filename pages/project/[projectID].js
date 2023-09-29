import { useRouter } from "next/router"

const projects = () => {
    const router = useRouter();

    return(
        <h1>{router.query.projectID}</h1>
    )
}

export default projects;