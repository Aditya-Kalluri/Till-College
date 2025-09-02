export default function Projects() {
    return (
        <div>
            <ol>
                <li>
                    <a href="https://github.com/Aditya-Kalluri/HospitalHelpdeskPortal">Hospital Management System</a>
                    <p>Managed a database on doctors and patients, giving features to add, edit and delete any existing patient or doctor. This also has a an appointment booking and feedback systems that are added in this</p>
                </li>
                <li>
                    <a href="/">3-axis translational magnetometer</a>
                    <p>Made an arduino based system, that uses 3 motors to move in all 3 axes and checks the homogenity of magnetic field inside a Low Field MRI</p>
                </li>
                <li>
                    <a href="/">Smart Bag</a>
                    <p>Made a bag that records your ECG and detects whether you have an arrhythmia</p>
                </li>
                <li>
                    <a href="">Zephyr RTOS in TMP117</a>
                    <p>Tweaked the existing code for TMP116 and understood how an RTOS works. Converted the existing celsius measurement to fahrenheit, even though it cannot return a float and only returns integer</p>
                </li>
            </ol>
        </div>
    )
}