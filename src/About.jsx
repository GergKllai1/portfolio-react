import React from "react"
import { UndrawHello } from "react-undraw-illustrations"

const About = () => {
    return (
        <div className="px-4 pt-4 flex-1 overflow-y-scroll">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawHello primaryColor='#12283a' height='200px'  />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="text-grey-dark">About Me</h1>
                    <p className="text-grey-dark">Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                </div>

            </div>
        </div>
    )
}

export default About