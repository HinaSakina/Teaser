import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
        
      />
    ),
    title: "Is there a free trial available?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I change my plan later?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What is your cancellation policy?",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, repellat. Praesentium consectetur repellendus harum provident ad. Ducimus, ad consectetur? Distinctio inventore ad velit nihil debitis sapiente ipsum doloremque quaerat consectetur.",
  },
];

export const ServiceItem = [
  {
    title: 'HR Managers',
    desc: 'Oversees employee recruitment, onboarding, and development.',
    icon: <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'hr-managers'
  },
  {
    title: 'Project Manager',
    desc: 'Plans, executes, and monitors projects to ensure successful completion.',
    icon: <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'product-managers'
  },

  {
    title: 'Product Manager',
    desc: ' eads the strategy, development, and launch of a product.',
    icon: <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'software-developers'
  },
  {
    title: 'Marketer',
    desc: "Creates and implements strategies to promote a company's products or services.",
    icon: <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'teachers'
  },
  {
    title: 'Business Analyst',
    desc: 'Analyzes business needs and develops solutions to improve efficiency.',
    icon: <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'data-scientists'
  },
  {
    title: 'Operations Manager',
    desc: 'Optimizes day-to-day business processes to ensure smooth operations.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'designers'
  },
  {
    title: 'Software Developer',
    desc: 'Writes code to create and maintain software applications.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'pr-specialists'
  },
  {
    title: 'Content Writer & Creator',
    desc: 'Develops engaging written, visual, or audio content.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'content-writers'
  },
  {
    title: 'Public Relations Specialist',
    desc: "Manages a company's public image and builds relationships with the media.",
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'project-managers'
  },
  {
    title: ' Designer',
    desc: 'Creates visual elements like user interfaces, graphics, or physical products.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'operations-managers'
  },
  {
    title: 'Data Scientist',
    desc: 'Extracts insights and knowledge from data using statistical methods and machine learning.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'business-analysts'
  },
  {
    title: 'Teacher',
    desc: 'Educates and imparts knowledge to students in a specific subject area. ',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'marketers'
  },
];


