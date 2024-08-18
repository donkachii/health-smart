import styles from '../../../styles/Navbar.module.css';
const About = () => {
	return (
    <div className='max-w-4xl mx-auto ' id="about">
			<div className='flex flex-col items-center'>
				<h2 className={styles.aboutHeading}>About HealthSmart</h2>
				<p className="text-slate-600 mx-4 lg:mx-0 leading-8">
					HealthSmart is your ultimate resource for mastering essential health
					and first aid knowledge. Designed to empower learners of all levels,
					HealthSmart offers a comprehensive platform where you can create,
					share, and study flashcards tailored to your specific needs. Whether
					you're a student, a healthcare professional, or someone simply looking
					to stay informed, HealthSmart provides the tools to deepen your
					understanding and boost your confidence in critical health topics.
					Join our community and take control of your learning journey with
					HealthSmart.
				</p>
			</div>
     
      
		</div>
	);
};

export default About;
