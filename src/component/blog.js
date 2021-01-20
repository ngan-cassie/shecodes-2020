import React, { Component } from "react";
import { Card } from "./blog-card";
import "./blog.styles.css";
export const Blog = () => {
  return (
    <div className="blog">
      <Card
        image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/12/tired_woman_at_work-11296x728-header.jpg?w=1155&h=1528"
        caption="Eye strain, headace, hunger, etc. tons of problems"
      />
      <Card
        image="https://afamilycdn.com/2019/3/11/tiem-phong-1552303145317502086567.jpg"
        caption="Vietnam's immunization schedule for families"
      />
      <Card
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/EAD2/production/_114241106_vaccineillus976_rtrs.jpg"
        caption="COVID vaccine starts rolling yet still faces challenges ahead"
      />
      <Card
        image="https://www.chatelaine.com/wp-content/uploads/2019/01/Planetary-health-diet-food-environment-meat-how-much-plant-based-protein-global-warming-food.jpg"
        caption="Food and health: the unbreakable bond"
      />
      <Card
        image="https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2018/01/not-sure-what-to-eat-when-sick.jpg?mw=1600"
        caption="Symptoms, causes, treatment, and more"
      />
      <Card
        image="https://www.careerstaff.com/wp-content/uploads/2020/05/national-hospital-week-2020-thegem-blog-timeline-large.jpg"
        caption="Happy National Hospital Week!"
      />
    </div>
  );
};

export default Blog;
