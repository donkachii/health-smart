import Link from "next/link";
import styles from '../../../styles/Navbar.module.css';
import { FaCircleArrowDown } from 'react-icons/fa6';

export default function Parallax() {
	return (
		<div className={styles.parallax}>
			<div className='max-w-5xl'>
				<p className={styles.text}>Click to get started plan below</p>
				<div>
					<Link href='#' className='flex justify-center items-center'>
						<FaCircleArrowDown className={styles.arrow} />
					</Link>
				</div>
			</div>
		</div>
	);
}
