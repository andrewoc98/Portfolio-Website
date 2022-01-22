import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//TODO: fill out details

function Education() {
    return (
        <div className="title-container">
            <div className="title">
                <Tabs>
                    <TabList>
                        <Tab>Front End</Tab>
                        <Tab>Back End</Tab>
                        <Tab>Database</Tab>
                        <Tab>Methodologies</Tab>
                        <Tab>Certifications</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Software Development:</h2>
                        <p>Covers Concepts in front end Developement. Frameworks used in this module were Bootstrap, React, Flask and jQuerey.</p>
                        <br/>

                        <h2>Computer Graphics:</h2>
                        <p>Studied the rendering and manipulation of visual constent .Libraries such as SDL were used through out this module.</p>
                        <br/>

                    </TabPanel>
                    <TabPanel>
                        <h2>Object Oriented Development:</h2>
                        <p>Reviews the use of objects, interfaces and abstraction in the Java programming language. Ontop of this reviewed different types and practical use of design patterns. Used the Spring framework in this module.</p>
                        <br/>

                        <h2>Neural Computing:</h2>
                        <p>Module focused on the creation of machine learning and AI. Examples of libraries that were used in this module were Tensorflow, Scikit Learn, NumPy, Pandas, ect.</p>
                        <br/>

                        <h2>Mobile Application Development:</h2>
                        <p>Creation, Deployment and Developement of full scale mobile applications. Used Android Studio, Firebase and Figma during this module. Completed project in this module </p>
                        <br/>

                        <h2>Data Mining:</h2>
                        <p>Engages with the process of finding anomalies, patterns and correlations within large data sets to predict outcomes. Libraries such as PySpark PyTorch and scipy were used.</p>
                        <br/>

                    </TabPanel>
                    <TabPanel>
                        <h2>Data Structures and Algorithms:</h2>
                        <p>Covers different kinds of data algorithms and the associated big O notation. Aswell Data Structures such as BST and linked list</p>
                        <br/>

                        <h2>Database Systems:</h2>
                        <p>Creation, Use and structure of relational/non-relation databases. Gained profiency in SQL. Used DBMS's such as MongoDB and PostgreSQL</p>
                        <br/>

                        <h2>Big Data Management and Security:</h2>
                        <p>Studies advisorys and there tactics and techniques, aswell as how to model against them .The module also covers Machine learning with larges datasets . Created a movie recommender system using PySpark</p>
                        <br/>

                    </TabPanel>
                    <TabPanel>
                        <h2>Systems Analysis and Design:</h2>
                        <p>Engaged in team-based models such as agile and scrum to meet stakeholder requirements.</p>
                        <br/>

                        <h2>Advanced Programming Concepts and Practices:</h2>
                        <p>Covered concepts such as concurrency and parralelism. Created a Shopping Centre simulator using Golang</p>
                        <br/>

                        <h2>Software Design and Architecture:</h2>
                        <p>Studied and used design patterns for practical work. Created a javafx eccomerce application using Heroku backend.</p>
                        <br/>

                        <h2>Project Management and Practice:</h2>
                        <p>Studied the skills tools and techniques used in the creation and lifecycle of projects.</p>
                        <br/>

                    </TabPanel>
                    <TabPanel>
                        <h2>AWS Cloud Practitioner Essentials:</h2>
                        <p>Provides understanding and familiarity with AWS Cloud Concepts.</p>
                        <br/>

                        <h2>Microsoft Azure Cloud Fundamentals:</h2>
                        <p>Delivers knowlege of cloud services provided by Microsoft Azure.</p>
                        <br/>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
} export default Education