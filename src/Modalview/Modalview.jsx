import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            Greetings! I'm a skilled web developer currently transitioning into Full Stack Development. Proficient in React, JavaScript, TypeScript, TailwindCSS, Electron, NodeJS, and Express JS, I graduated from Jadavpur University in 2022. My expertise extends to tools like Jira, PostgreSQL, Agile Methodology, Databricks, DBeaver, Snowflake, and SFDC. Beyond coding, I'm passionate about mastering Data Structures and Algorithms, with a focus on Dynamic Programming, Hash Tables, Trees, and Graphs. Eager to engage with the community, I bring a wealth of experience in software development and a commitment to continuous learning and growth. Let's connect and thrive together!
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                About Me
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>About Me</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;