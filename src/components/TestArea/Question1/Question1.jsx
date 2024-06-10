import React from 'react';
import styles from './Question1.module.css'; // Importing CSS module
import Canvas from './Canvas';

const sections = [
    'VISUOSPATIAL / EXECUTIVE',
    'NAMING',
    'MEMORY',
    'ATTENTION',
    'LANGUAGE',
    'ABSTRACTION',
    'DELAY RECALL',
    'ORIENTATION'
];

const Question1 = () => {
    const [currentSection, setCurrentSection] = React.useState(0); // Track the current section
    const [completedSections, setCompletedSections] = React.useState([]); // Track completed sections

    const handleSectionComplete = () => {
        setCompletedSections([...completedSections, currentSection]);
        setCurrentSection(currentSection + 1);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Question 1</h2>
            <p className={styles.text}>
                Please draw a line going from a number to a letter in ascending order.
                Begin here [point to (1)] and draw a line from 1 then to A then to 2 and
                so on. End here [point to (E)].
            </p>
            <div className={styles.canvasWrapper}>
                <Canvas onComplete={handleSectionComplete} />
            </div>
            <div className={styles.progressBar}>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`${styles.section} ${completedSections.includes(index) ? styles.completed : ''} ${currentSection === index ? styles.current : ''}`}
                    >
                        {section}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question1;
