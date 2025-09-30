# Interview

## Projects

- ZF SdV PMT: project managment software to connect all project builds, source control, artifacts, ...
- ZF ARAIV (autonomous driving): data processing, analytics, dashboards, reports.
- Hannover Rück: Risk Assessment data aggregation, dashboards, reports, querying, SQL

## Points

- I can work where I am needed aross the tech stack. 
- I know the fundamentals well and have spent time learning software architecture so I can easily understand and implement architecture decisions.
- Point cloud data: Originally, the data was stored in ROS bag files, which required opening and iterating to find the point cloud for a given timestamp. The webservice was sending this data as JSON, making the process too slow for an analytics dashboard. I optimized the workflow by converting the point clouds into .pcd files per timestamp and creating a metadata table for quick lookup. When a client requested a point cloud, the system could immediately locate the file. Since the frontend framework only supported JSON, I leveraged the underlying Flask server to create a /pointclouds/:id endpoint that served the data as binary. This reduced load times from several seconds to a fraction of a second, enabling near real-time visualization.
- SQL Hannover - We aggregated large volumes of risk assessment data and improved the existing queries for faster aggregation and reporting. I remember being surprised how different SQL queries requesting the same data could be drastically different in speed.

## Questions they could ask

### About DevOps

I’ve used Docker and Jenkins in all of my projects at ZF. In the autonomous driving project, we actually started completely from scratch and then moved step by step to a fully automated CI/CD pipeline.

That process really helped me understand the value of automation and efficient container design. For example, we used multi-stage Dockerfiles and a shared base image across services to reduce build times and ensure consistency between environments. It made a huge difference in developer productivity — and it really gave all those best practices meaning, because I could see the improvement firsthand.

### About MUI

I’m familiar with MUI through my work on the developer portal in the SdV PMT department at ZF. The developer portal uses Backstage, which relies on MUI, and since the team was initially less familiar with React and TypeScript, I helped them get up to speed, giving me hands-on experience with MUI. For custom UIs, I usually use shadcn to build my own component libraries, which makes creating tailored components straightforward. I’d mainly recommend it to developers with solid React experience, since you are then responsible for maintaining the code.

### About Kotlin

I haven’t used Kotlin professionally, but I’ve experimented with it in personal projects and found it very easy to work with. I’m familiar with modern language features like string templates, type inference, and null safety. I always use type annotations in Python and prefer TypeScript over JavaScript, so I really appreciate the benefits of a statically typed language. I’d be excited to deepen my Kotlin expertise, especially if it’s the primary language used at Inno.

### About Spring Boot

I haven’t used Spring Boot before, but I am familiar with its architecture. I’ve worked with similar frameworks like Nest.js (which was based on Spring Boot) and I have built web services with Express.js, FastAPI, Flask and Hono with the same architecture. Overall, I’m confident I could quickly pick up Spring Boot and start contributing effectively.

## Questions I can ask

- What would my day-to-day responsibilities be as a Senior Software Developer at Inno? For example, would I be focused more on backend development, improving modularity, implementing new features, or supporting the existing system?

- What is the overarching goal currently? Are you seeking to improve the modularity of your software for example or performance or even developer experience?

- Can you tell me about the current architecture and where you’re looking to take it? ... That’s great — I’ve worked with microservices, and I’ve found that good logging, monitoring, and telemetry are absolutely essential for keeping everything observable and manageable. Without them, it’s easy to lose track of how services are behaving or where performance bottlenecks are.”

- What are the business plans for the future? How do you use AI?

- How are the teams organized?

- How does SCOPE handle access control for sensitive data? Are you using role-based access control (RBAC), attribute-based access control (ABAC), or a different approach? If RBAC: “How do you handle fine-grained permissions when roles need exceptions?” 

- On the website I read "Benefit from high precision thanks to real-time connections across a wide variety of data sources resulting into the point qualified reports." How do you achieve this? Do you use GraphQL subscriptions with a websocket transport protocol?

- Are you processing large datasets or a lot of small datasets or both?

- Stefan told me that you migrated from Java to Kotlin. I really like that you are looking to modernize your tech stack. How did you go about it? I understand that they are interopable but that is still quite an undertaking. Did you make improvements along the way? Did you continue to ship features during the transition? (Asnwers the question: Is the management effective?)

- How do individual developers make an impact on the software?

- I understand you want someone who can work across the stack. Does anyone aleady work across the stack? How do you handle the different paradigms as Spring Boot is very much OOP and React is more functional? Personally, I am comfortable with both paradigms, I can easily switch from writing web services with OOP and UIs with React, as I have been working across the stack my entire career, but I know this is difficult for some people as they are often firmly in one camp or the other.