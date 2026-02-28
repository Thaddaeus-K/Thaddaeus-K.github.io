export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  type: 'Personal' | 'Academic';
  description: string;
  heroImage: string;
  sections: ProjectSection[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rationale Thinking Learning Centre',
    category: 'Interior Design',
    type: 'Personal',
    description: 'A modern learning space designed to foster creativity and collaborative thinking.',
    heroImage: '/thaddaeuskwok.github.io/project-1.jpg',
    sections: [
      {
        title: 'The Concept',
        content: 'The design looks to go beyond the whitewashed walls of conventional classrooms. It explores the adaptation of an Art Gallery ambience to enhance the learning environment, where teaching breaks the four borders of a whiteboard. The Rationale Thinking Learning Centre, which specialises in teaching the English Language and General Paper, wanted a unique yet effective learning environment for its students. The client noted that Art was a topic that many students avoided writing about in their examinations. Thus the concept of an Art Gallery was decided upon to inspire the students and provide a different perspective on tuition centres.'
      },
      {
        title: 'The Design',
        content: 'The client favoured the classic Old European masterpieces. However, young people today may not have an appreciation for them and may find them overwhelming. This meant that the design had to be aesthetically pleasing — to not drive potential customers away, and yet cater to the current business clientele. Hence, the design features a variety of art paintings, from portrait oil paintings to contemporary art. The design is not just aesthetics; it also helps to broaden the students\' learning horizon.'
      },
      {
        title: 'Curating the Space',
        content: 'With a wide variation of art pieces in one place, it was challenging to integrate them harmoniously. A careful selection of colours, paintings, and frames were chosen to ensure a cohesive and balanced design throughout the space.'
      },
      {
        title: 'Layout & Functionality',
        content: 'Not forgetting the furniture and layout — the client wanted to accommodate more students in the most efficient way possible. With a structural column in the middle of the classroom acting as an obstruction, careful planning was required. After much deliberation, an optimum layout was achieved that seats the maximum number of students while providing each student with an unobstructed view of the whiteboard.'
      }
    ],
    gallery: [
      '/thaddaeuskwok.github.io/project-1.jpg',
      '/thaddaeuskwok.github.io/project-1.jpg',
      '/thaddaeuskwok.github.io/project-1.jpg',
      '/thaddaeuskwok.github.io/project-1.jpg',
    ]
  },
  {
    id: 2,
    title: 'Mission Trips to Kupang',
    category: 'Video Production',
    type: 'Personal',
    description: 'Documentary capturing the heartwarming community stories in West Timor.',
    heroImage: '/thaddaeuskwok.github.io/project-2.jpg',
    sections: [],
    gallery: []
  },
  {
    id: 3,
    title: 'Fibonacci Cryptex',
    category: 'Parametric Design',
    type: 'Academic',
    description: 'Exploring the golden ratio through computational architectural forms.',
    heroImage: '/thaddaeuskwok.github.io/project-3.jpg',
    sections: [],
    gallery: []
  },
  {
    id: 4,
    title: 'Luxury Apartment Interior',
    category: 'Interior Design',
    type: 'Personal',
    description: 'A sophisticated urban living space with panoramic city views.',
    heroImage: '/thaddaeuskwok.github.io/project-4.jpg',
    sections: [],
    gallery: []
  }
];