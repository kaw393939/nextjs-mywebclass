import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function Summary({ allPostsData }) {
  return (
    allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <Image
                  priority
                  src="/images/profile.png"
                  className={"h-48 w-full object-cover md:h-full md:w-48"}
                  height={122}
                  width={122}
                  alt=""
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              </div>
            </div>
          </div>
        </li>
      ))
  );
}