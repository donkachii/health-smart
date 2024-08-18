import Image from 'next/image';
import basic from '../../../public/assets/basic plan.svg';
import premium from '../../../public/assets/premium plan.svg';
import premiumPlus from '../../../public/assets/premium plus.svg';
import { BsCheck2 } from 'react-icons/bs';
import styles from '../../../styles/Navbar.module.css';
import Link from 'next/link';

export default function Plan() {
	return (
		<div className='max-w-5xl mx-auto mt-8 px-4' id='plan'>
			<div className='text-center leading-8 mb-16'>
				<h3 className={styles.plan}>Health Plans</h3>
				<p>Choose the plan that works for you</p>
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
				{/* Basic Plan */}
				<div className='border border-blue-800 flex flex-col p-8 rounded-xl shadow-lg relative'>
					<div className='flex items-center'>
						<Image src={basic} alt='basic-plan' width={50} height={50} />
						<div className='ml-4'>
							<h3 className='text-slate-500 text-2xl font-semibold'>
								Basic Plan
							</h3>
							<p className='text-slate-800 font-bold'>Free</p>
						</div>
					</div>
					<div className='mt-10'>
						<div className='flex items-start'>
							<BsCheck2 className='text-blue-700 text-xl' />
							<p className='ml-2'>Access to 50 flashcards</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-blue-700 text-xl' />
							<p className='ml-2'>Basic health and first aid topics</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-blue-700 text-xl' />
							<p className='ml-2'>Create and study flashcards</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-blue-700 text-xl' />
							<p className='ml-2'>Community access</p>
						</div>
					</div>
					<div className={styles.btnPlanContainer}>
						<Link href='#'>
							<button className={styles.btnPlan}>Get plan</button>
						</Link>
					</div>
					
				</div>

				{/* Pro Plan */}
				<div className='bg-blue-900 flex flex-col p-8 rounded-xl relative text-white'>
					<div className='flex items-center'>
						<Image src={premium} alt='premium-plan' width={50} height={50} />
						<h3 className='text-2xl font-semibold ml-4'>Pro</h3>
					</div>
					<div className='mt-10'>
						<div className='flex items-start'>
							<BsCheck2 className='text-green-700 text-xl' />
							<p className='ml-2'>Access to unlimited flashcards</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-green-700 text-xl' />
							<p className='ml-2'>Advanced health and first aid topics</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-green-700 text-xl' />
							<p className='ml-2'>Create, study, and share flashcards</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-green-700 text-xl' />
							<p className='ml-2'>Community access with discussion forums</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-green-700 text-xl' />
							<p className='ml-2'>Ad-free experience</p>
						</div>
					</div>
					<div className={styles.btnPlanContainer}>
						<Link href='#'>
							<button className={styles.btnPlan2}>Get plan</button>
						</Link>
					</div>
				</div>

				{/* Premium Plus Plan */}
				<div className='border border-blue-800 flex flex-col p-8 rounded-xl shadow-lg'>
					<div className='flex items-center'>
						<Image
							src={premiumPlus}
							alt='premiumplus-plan'
							width={50}
							height={50}
						/>
						<h3 className='text-slate-500 text-2xl font-semibold ml-4'>
							Premium Plus
						</h3>
					</div>
					<div className='mt-10'>
						<div className='flex items-start'>
							<BsCheck2 className='text-yellow-700 text-xl' />
							<p className='ml-2'>All Pro Plan features</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-yellow-700 text-xl' />
							<p className='ml-2'>Personalized study plans</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-yellow-700 text-xl' />
							<p className='ml-2'>Priority customer support</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-yellow-700 text-xl' />
							<p className='ml-2'>Access to exclusive webinars and content</p>
						</div>
						<div className='flex items-start mt-2'>
							<BsCheck2 className='text-yellow-700 text-xl' />
							<p className='ml-2'>Offline access to flashcards</p>
						</div>
					</div>
					<div className={styles.btnPlanContainer}>
						<Link href='#'>
							<button className={styles.btnPlan}>Get plan</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
