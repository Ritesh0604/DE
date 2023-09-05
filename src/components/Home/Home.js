import React from 'react';

import Card from '../UI/Card/Card';
import './Home.css';

const Home = () => {
  return (
    <>
      <Card className='home'>
        <img src='https://imgs.search.brave.com/kaTKIr-lj3TtYOzndu9K9uQEAtnptwdjVTMgItizUGw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50My5qZG1hZ2lj/Ym94LmNvbS9jb21w/L2FobWVkYWJhZC8y/NC8wNzlwMjU4NDI0/L2NhdGFsb2d1ZS92/aXNod2FrYXJtYS1n/b3Zlcm5tZW50LWVu/Z2luZWVyaW5nLWNv/bGxlZ2UtY2hhbmRr/aGVkYS1haG1lZGFi/YWQtZW5naW5lZXJp/bmctY29sbGVnZXMt/Mnl0dGlsci0yNTAu/anBn' ></img>
      </Card>
      <div className='content'>
        <p>Vishwakarma Government Engineering College, Ahmedabad was established in August 1994, with an objective of imparting higher education in various fields of engineering and technology. This institute is recognized by All India Council of Technical Education (AICTE), New Delhi and Institute of Engineers (India). The college is administrated by Directorate of Technical Education, Gujarat State, Gandhinagar and is affiliated with Gujarat Technological University. VGEC shifted to its own campus at Chandkheda, Ahmedabad in the year 2004.</p>
        <p>
          <p>
            Welcome to our website.Here you will be helped with navigation of faculty.
          </p>
          <b> VISION</b>
          To create an ecosystem for proliferation of socially responsible and technically sound engineers, innovators and entrepreneurs.
        </p>
        <p>
          <b>Mission</b>
          To develop state-of-the-art laboratories and well-equipped academic infrastructure.
          To motivate faculty and staff for qualification up-gradation, and enhancement of subject knowledge.
          To promote research, innovation and real life problem solving skills.
          To strengthen linkages with industries, academic and research organizations.
          To reinforce concern for sustainability, natural resource conservation and social responsibility.
        </p>
      </div>
    </>
  );
};

export default Home;
