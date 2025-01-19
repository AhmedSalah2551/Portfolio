import { Component } from '@angular/core';
import * as AOS from 'aos';
import {MatDialog} from '@angular/material/dialog'
import { DetailsComponent } from './details/details.component';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  selectedFilter: string = 'all';
  result :any[] = []
  data : any[] = [
    {
      id:1,
      name:"Advanced ToDoList",
      img:"https://i.postimg.cc/GmYcjJMV/advanced.jpg",
      repositery:["https://github.com/AhmedSalah2551/Advanced_ToDoList.git"],
      preview:["https://ahmedsalah2551.github.io/Advanced_ToDoList/"],
      tools:"angular",
      content:[
        "The To-Do List website is a user-friendly task management platform designed to help users stay organized and productive. The site allows users to seamlessly add, delete, and edit tasks to suit their changing priorities. It features an intuitive drag-and-drop functionality for reordering tasks, enabling users to rearrange their task list effortlessly based on importance or urgency. With its sleek and responsive interface, the website ensures a smooth experience across devices, whether on desktop, tablet, or mobile. Each task is displayed in an editable format, with options to update its details in real-time. The drag-and-drop feature is powered by a dynamic, interactive UI, making task organization both engaging and straightforward. This To-Do List website is perfect for managing personal errands, work projects, or any list of activities that require effective organization and easy updates.",
      ]
    },
    {
      id:2,
      name:"Portfolio",
      img:"https://i.postimg.cc/65rR1R12/portofilo.jpg",
      repositery:["https://github.com/AhmedSalah2551/Portfolio.git"],
      preview:["https://ahmedsalah2551.github.io/Portfolio/"],
      tools:"angular",
      content:[
        "The Portfolio website Is a thoughtfully crafted platform designed to highlight an individual’s unique skills, experiences, and professional accomplishments in an engaging and visually appealing way. Perfect for creatives, developers, freelancers, and professionals across all fields, this website serves as a digital showcase that combines style with functionality to leave a lasting impression.",
        "Featuring a sleek, user-friendly layout, the Portfolio website includes dedicated sections for a personal bio, skillset, project galleries, case studies, and testimonials. The bio section allows users to introduce themselves, share their background, and outline their passions and expertise, helping visitors connect on a personal level. The project gallery is customizable, enabling users to organize their work into categories and showcase each project with high-quality images, videos, or interactive elements. Each project can also include detailed descriptions to provide insights into the process, skills used, and the impact or results achieved.",
        "To further establish credibility, the website features a testimonials section, where clients, colleagues, or collaborators can share their feedback and experiences. This builds trust and demonstrates the user’s professional reliability. Additionally, the Portfolio website incorporates a skillset or tools section, enabling users to highlight specific competencies, certifications, or technologies they have mastered.",
        "The website’s responsive design ensures a seamless experience across all devices, from desktops to smartphones, so potential employers or clients can browse the portfolio on any screen. Social media links and an integrated contact form provide easy options for reaching out, enhancing networking potential and enabling new career or project opportunities.",
        "With its sophisticated design, intuitive layout, and customization options, this Portfolio website is not just a resume; it’s an Immersive personal brand platform that helps users stand out in a competitive landscape."
      ]
    },
    {
      id:3,
      name:"Exam",
      img:"https://i.postimg.cc/gkLdYHPj/exam.jpg",
      repositery:["https://github.com/AhmedSalah2551/EXAM.git"],
      preview:["https://ahmedsalah2551.github.io/EXAM/"],
      tools:"angular",
      content:[
        "The Exam Management Website is a robust platform designed to streamline the process of creating and managing online exams for teachers and students. Teachers can easily create exams tailored to specific subjects, manage and delete subjects as needed, and monitor individual student performance with detailed grade tracking.",
        "Students can log in to access their assigned exams and complete them with the assurance that each exam can only be taken once, ensuring fair assessment. The platform features a secure login system for both teachers and students, providing role-specific access and protecting sensitive information.",
        "The intuitive interface makes it simple for teachers to manage their classes and for students to focus on their exams, creating an efficient and organized online learning environment."
      ]
    },
    {
      id:4,
      name:"Dashboard",
      img:"https://i.postimg.cc/bvpj9XSS/dashboard.jpg",
      repositery:["https://github.com/AhmedSalah2551/Dashboard.git"],
      preview:["https://ahmedsalah2551.github.io/Dashboard/"],
      tools:"angular",
      content:["The Dashboard website provides a centralized, interactive platform for users to monitor and manage key metrics, data, and tasks in real time. Designed with a user-friendly layout, it offers customizable widgets, charts, and data visualizations, allowing users to tailor the dashboard to their specific needs. From tracking performance and analytics to monitoring project progress and goals, the dashboard gives users clear insights at a glance. With easy navigation, responsive design, and options for data filtering, exporting, and drill-down analysis, the website helps users stay informed, make data-driven decisions, and streamline workflows efficiently."
      ]
    },
    {
      id:5,
      name:"Type Writer Speed",
      img:"https://i.postimg.cc/j2s9Sm3y/typewriter.jpg",
      repositery:["https://github.com/AhmedSalah2551/type-writer-speed.git"],
      preview:["https://ahmedsalah2551.github.io/type-writer-speed/"],
      tools:"js",
      content:[
      "The Typing Speed Test website is an engaging platform designed to measure and improve your typing speed and accuracy. Users can test their skills by typing a variety of texts, including random words, sentences, or paragraphs, within a timed session.",
      "The website provides real-time feedback, displaying metrics such as words per minute (WPM), accuracy percentage, and a detailed breakdown of errors. After completing a test, users can view their performance history and track their progress over time."
      ,"The platform features a sleek, responsive design and offers multiple difficulty levels, catering to beginners and advanced typists alike. With fun challenges and practice modes, the Typing Speed Test website is perfect for anyone looking to enhance their keyboarding skills or compete with friends to achieve the highest score."
      ]
    },
    {
      id:6,
      name:"To Do List",
      img:"https://i.postimg.cc/4N08DYG6/todolist.jpg",
      repositery:["https://github.com/AhmedSalah2551/To-Do-List.git"],
      preview:["https://ahmedsalah2551.github.io/To-Do-List/"],
      tools:"js",
      content:[
        "Welcome to ToDoList, the simple yet powerful online task manager designed to help you stay organized and boost your productivity. Whether you’re planning your day, managing long-term projects, or tracking personal goals, ToDoList is here to keep you on track. Create, prioritize, and track tasks with ease. You can set due dates, add descriptions, and organize your to-dos into customizable lists. With a clean, user-friendly interface and intuitive design, managing your daily life has never been easier. Stay focused, stay organized, and get things done with ToDoList!"
        ,`Key Features:

          Task Creation: Quickly add tasks and set deadlines.
          Priority & Categories: Organize tasks by priority or categories.
          Progress Tracking: Mark tasks as completed to track your progress.
          Cross-Device Sync: Access your to-do lists from any device, anytime.
          Reminders & Notifications: Never miss a deadline with timely reminders.
          Start using ToDoList today and take control of your tasks with ease!`
      ]
    },
    {
      id:7,
      name:"Hangman Game",
      img:"https://i.postimg.cc/pXj8dr8Y/hangman.jpg",
      repositery:["https://github.com/AhmedSalah2551/hangman.git"],
      preview:["https://ahmedsalah2551.github.io/hangman/"],
      tools:"js",
      content:[
        "Welcome to Hangman — the classic word-guessing game that challenges your vocabulary and spelling skills! In this game, you’ll be given a series of blank spaces representing a hidden word. Your task is to guess the word by suggesting letters, one at a time. But be careful! Each incorrect guess adds a part to the hangman figure. The game ends when you either guess the word correctly or the hangman is fully drawn. Ready to test your knowledge? Play now and see how many words you can guess before the hangman comes to life!",
        "Hangman Game Rules",
        "1- Objective: The goal of Hangman Is to guess the hidden word by suggesting letters. Each correct letter fills In one or more blanks, while incorrect guesses bring the hangman closer to being completed.",
        "2- Gameplay: At the start, you’ll see a series of blank spaces representing the letters in the word you need to guess.You can propose one letter at a time. If the guessed letter is in the word, it will fill the corresponding blanks .If the letter Isn’t in the word, a part of the hangman figure (head, body, arms, etc.) will be drawn.",
        "3- Incorrect Guesses: You have a limited number of incorrect guesses before the hangman is fully drawn (usually 6 or 7). Each wrong guess results In one part of the hangman figure being drawn. Once the hangman figure Is completely drawn, the game ends, and you lose",
        "4- Winning: You win if you can guess all the letters of the word before the hangman Is fully drawn. The word is revealed when you’ve guessed all Its letters correctly",
        "5- Hints and Strategy: Start by guessing common vowels (A, E, I, O, U) and frequently used consonants (R, S, T, N). Try to think of words that fit the number of blanks and the letters you’ve already guessed The more words you play, the better you’ll get at recognizing patterns! Enjoy the challenge and have fun guessing your way to victory in Hangman!"
      ]
    },
    {
        id:8,
        name:"Memory Game",
        img:"https://i.postimg.cc/90KSVpKh/maemory.jpg",
        repositery:["https://github.com/AhmedSalah2551/Memory_Game.git"],
        preview:["https://ahmedsalah2551.github.io/Memory_Game/"],
        tools:"js",
        content:[
          "Welcome to Memory Match, the ultimate online destination for sharpening your mind while having fun! Our website offers a variety of exciting memory games designed to test and improve your concentration, pattern recognition, and recall skills. Whether you're a beginner or a memory master, our customizable difficulty levels ensure a challenge for everyone. Play solo or compete with friends to see who can match the most pairs in the shortest time. With engaging visuals, a sleek interface, and endless replayability, Memory Match is perfect for all ages. Ready to boost your brain power? Start playing now!",
          "Memory Match Game Rules",
          "1.	Objective: The goal of the game Is to match pairs of identical cards by flipping them over two at a time. The player with the fewest moves or fastest time wins",
          "2.	Setup: The game consists of a grid of face-down cards, each with a matching pair. You can choose the grid size (e.g., 4x4, 6x6) and difficulty level before starting",
          "3.	Gameplay: Click on any two cards to flip them over and reveal their images. If the two cards match, they will remain face-up. If the cards do not match, they will flip back face-down after a short delay, and you can try again.",
          "4.	Winning: The game ends when all the cards are matched. You can track your performance by checking your total number of moves or the time taken to complete the game",
          "5.	Tips: Try to remember the locations of the cards you’ve flipped over to make it easier to find matching pairs. Start with smaller grids to practice before taking on larger, more challenging ones. Enjoy the game and challenge yourself to improve your memory skills with each play!"
        ]
    },
    {
      id:9,
      name:"Landing Page 2",
      img:"https://i.postimg.cc/t4jbxqvH/land-1.jpg",
      repositery:["https://github.com/AhmedSalah2551/Landing_page_2.git"],
      preview:["https://ahmedsalah2551.github.io/Landing_Page_2/"],
      tools:"html&css",
      content:[
        "The Landing Page website Is a visually compelling, single-page platform designed to capture attention, convey key information quickly, and guide visitors toward taking a specific action—whether it's signing up, purchasing a product, or learning more. Typically used for marketing campaigns, product launches, or brand promotions, this type of website focuses on converting visitors by providing clear and engaging content in a streamlined format.",
        "With an eye-catching layout, the Landing Page website combines impactful headlines, concise messaging, and striking visuals to deliver a focused narrative that instantly communicates the core value or benefits of a product or service. Interactive elements like call-to-action (CTA) buttons, forms, and testimonial sections encourage user engagement, making it easy for visitors to take the next step.",
        "The design Is responsive and optimized for all devices, ensuring a seamless experience whether viewed on a desktop, tablet, or mobile device. Minimal navigation options and thoughtfully placed elements help maintain the visitor’s attention, minimizing distractions and driving conversions. Additionally, the website can include multimedia elements such as videos, animations, or sliders to enhance the user experience and convey the brand’s message more dynamically.",
        "With analytics integration, the Landing Page website also allows users to track visitor behavior, conversion rates, and engagement metrics, providing valuable insights for optimization. Tailored to specific goals, this website serves as a powerful tool for capturing leads, building brand awareness, and driving meaningful actions in a focused, high-impact format."
      ]
    },
    {
      id:10,
      name:"Landing Page 1",
      img:"https://i.postimg.cc/bJWcNpSW-/land-2.jpg",
      repositery:["https://github.com/AhmedSalah2551/Landing_Page_1.git"],
      preview:["https://ahmedsalah2551.github.io/Landing_Page_1/"],
      tools:"html&css",
      content:[
        "The Landing Page website Is a visually compelling, single-page platform designed to capture attention, convey key information quickly, and guide visitors toward taking a specific action—whether it's signing up, purchasing a product, or learning more. Typically used for marketing campaigns, product launches, or brand promotions, this type of website focuses on converting visitors by providing clear and engaging content in a streamlined format.",
        "With an eye-catching layout, the Landing Page website combines impactful headlines, concise messaging, and striking visuals to deliver a focused narrative that instantly communicates the core value or benefits of a product or service. Interactive elements like call-to-action (CTA) buttons, forms, and testimonial sections encourage user engagement, making it easy for visitors to take the next step.",
        "The design Is responsive and optimized for all devices, ensuring a seamless experience whether viewed on a desktop, tablet, or mobile device. Minimal navigation options and thoughtfully placed elements help maintain the visitor’s attention, minimizing distractions and driving conversions. Additionally, the website can include multimedia elements such as videos, animations, or sliders to enhance the user experience and convey the brand’s message more dynamically.",
        "With analytics integration, the Landing Page website also allows users to track visitor behavior, conversion rates, and engagement metrics, providing valuable insights for optimization. Tailored to specific goals, this website serves as a powerful tool for capturing leads, building brand awareness, and driving meaningful actions in a focused, high-impact format."
      ]
    },
    {
      id:11,
      name:"Crud",
      img:"https://i.postimg.cc/KvLbwfr1/Capture.jpg",
      repositery:["https://github.com/AhmedSalah2551/crud-admin.git",
                  "https://github.com/AhmedSalah2551/crud-user.git"],
      preview:["https://ahmedsalah2551.github.io/crud-admin/",
                "https://ahmedsalah2551.github.io/crud-user/",],
      tools:"angular",
      content:[
        "admin account: admin@admin.com",
        "admin password: 12345",
        "1- Admin Features:",
        "Add, edit, or delete tasks assigned to employees.",
        "Deactivate employee accounts to restrict access (if no active tasks exist).",
        "View a complete list of users and all tasks in the system.",
        "2- User Features:",
        "Register a new account and log in.",
        "View and manage their assigned tasks.",
        "Mark tasks as Completed.",
        "3- Bilingual Support:",
        "Fully supports Arabic and English for diverse users.",
        "4- Light and Dark Modes:",
        "Switch between light and dark themes for better usability.",
        "5- Flexible Task Management:",
        "Ensures admins can efficiently assign and manage tasks.",
        "6- User Access Control:",
        "Guarantees smooth operation by restricting deactivation if tasks are pending."
      ]
    },
  ]
  constructor(private dialogRef : MatDialog){}

  openDialog(id:number){
    this.dialogRef.open(DetailsComponent, {
      width: '800px',
      height: '90%',
      data:  this.data[id]
    });
  }
  ngOnInit(){

    this.filter(this.selectedFilter);

    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 200
    });
    }
trackByFn(index: number, item: any): number {
  return item.id;
}
    filter(category: string) {
      this.selectedFilter = category;
      if (category === 'all') {
        this.result = [...this.data];
      } else {
        this.result = this.data.filter(item => item.tools === category);
      }
    }
}
