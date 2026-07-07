export type Leader = {
  name: string;
  role: string;
  /** Add a photo to /public/leadership/ and set the path here, e.g. "/leadership/paul.jpg" */
  image?: string;
  /** Add paragraphs about your journey — one string per paragraph */
  bio: string[];
};

export const pastor: Leader = {
  name: 'Gianluca Amaral',
  role: 'Pastor',
  image: undefined,
  bio: [
    'Share your story and journey here. This section is ready for you to update with how God has led you into ministry and service at Hope For Today Fellowship Sutton.',
  ],
};

export const elders: Leader[] = [
  {
    name: 'Paul',
    role: 'Elder',
    image: undefined,
    bio: [
      'Share your story and journey here. This section is ready for you to update with your background, faith journey, and heart for serving our church family.',
    ],
  },
  {
    name: 'James',
    role: 'Elder',
    image: undefined,
    bio: [
      'Share your story and journey here. This section is ready for you to update with your background, faith journey, and heart for serving our church family.',
    ],
  },
  {
    name: 'Andrew',
    role: 'Elder',
    image: undefined,
    bio: [
      'Share your story and journey here. This section is ready for you to update with your background, faith journey, and heart for serving our church family.',
    ],
  },
  {
    name: 'Eric Desjardins',
    role: 'Elder',
    image: undefined,
    bio: [
      'Share your story and journey here. This section is ready for you to update with your background, faith journey, and heart for serving our church family.',
    ],
  },
];