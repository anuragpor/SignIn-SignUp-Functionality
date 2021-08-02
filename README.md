# Spring Hibernate Refactor
## Project By-
Anurag Porwal, 
IIT Roorkee (2nd year), Applied Mathematics Student

## Project for-


[![N|Solid](https://www.wijungle.com/images/WiJungle-Logo-Blue.png)](https://www.wijungle.com/)


This project mainly focuses on refactoring PHP codebase to java using technologies like spring and hibernate.

## Top Features
- Fully working spring and hibernate environment, using maven project, and configured xml files.
- Interaction with MySql database using hql and sql queries.
- Commandline execution using java Runtime class.
- File handling using java, execution of json reader, logger all of these were tested using a demo app.
- CRUD operation using hibernate.
- Validation of entity files using annotation based validation.
- PHP codebase converted to java.
- Execution of longToIp and IpToString methods 
- Error handling


## Tech

Following technologies have been used in the project:

- Spring Framework
- Hibernate
- Java
- PHP
- MySql
- LDAP
- MAVEN

## Project - [GITLAB LINK][code]

## Project Structure
``` bash
-Refactor
 - Business
   -Main
     -Constant
       - CommonMethods.java
       - Constant.java
       - Constants.java
     -Logic
       -Route
         -All files.java
       -Events
   -Resources
     - application.properties
     - applicationContext.xml
  - Model
    -Entity
      -Interfaces
        - All interface files.java
      - All entities files
    -Wrapper
      -Interfaces
        - All interface files.java
      - RouteData.java   
    - hibernate.cfg.xml
    - pom.xml
  - util
    - JSONReader.java
    - file_get_contents.java
    - file_put_contents.java
```
## Installation & Environment setup

Simply download the code and install all the required dependencies using pom.xml file if not started automatically go to pom.xml file and press ctrl+s to save, all the dependencies will begin downloading. 

## TASK-1
To Read about solid principle from this [article][CODE].
Work - Completed and reported to mentor on that day itself.

## TASK-2
To study spring framework + hibernate + tomcat and to create basic app using it.
Work - Learned all these technologies in dept from this course [Spring & Hibernate for Beginners (includes Spring Boot)][course_link] also implemented it using various test/demo app.

List of application which I created while learning.

- DemoHibernate Application [GitHub][demohibernate]
- Demo SpringMVC + tomcat 9 Application [GitHub][demoMVC]
- Spring framework application [GitHub][springdemo]
- Spring annotations demo [GitHub][springdemoannotation]
- Spring MVC Advance Demo(using more advanced features like validation of forms and preprocessing of forms using initBinder) [GitHub][springMVC]


## TASK-3
To learn logging and command exec implementation in java.
Work - Here I first tested the code and then used it int the project. Here I also learned file handling in java also created a basic app on it.

Some of my demo app for testing the code-
- ExecuteShellCommandRuntime test app - [GitHub][commandexec]
- Spring Boot Logging Application [GitHub][logger]
- Read and Write Application [GitHub][ReadAndWrite]

# TASK-4
Dynamic Route file, create basic jsp page, understand file locking in java, read java reflection, complete RouteData file, Constant file, entity files.

Work/Explanation - First organized the project as per directed, configured the hibernate by configuring various xml file, after that started working on **RouteData** file to perform CRUD operation in dynamicRoute file. This file have get, getAll, update, delete methods for all entities. Return type of getAll methods are of type *List<EntityName>* and for get it is single object of that entity. **From wijungle.sql file I build up the entity classes** and accordingly used annotaion for validation (like @notnull, @one-to-one, @entity etc), also implemented **constant.java** file during this task only which has utility static methods like ExecuteShellCommandRuntime to execute commands, logger method which in which we need to provide an argument of exception by which I can retrieve all details of that class/method and log to console. Util folder was also completed during this task only.
I have already created a jsp page using some advanced techniques while learning spring mvc, file locking and java reflection these two things I learned from net and after completion I reported to the mentor. 

# TASK-5
logic.zip files
Working/Explanation - This zip file contains have files similar to dynamic route files since the basic setup was already completed by me, I just started implemented the files in java I was able to cover 25 files, some new tech/funcionality like LDAP, json reader, file locking, LongToIp, IpToString etc, I learned how to implement them and then used it in my code. Also since java is a type safe langauge I have created data structures like map of map of map of string to store data, which was very brain stroming to think what type of data structure will work in the whole set of files. Rest of the work was somewhat similar to dynamicRoute file to getAll entity class in a list, to delete/update some data, execute command, save files in some directory, looping over data, reading json files and storing it in some data structur, file locking etc. 


## Scope of improvment
In RouteData file instead of using get, getAll methods for for each entity we can use generic in java, since I was beginner in java I came to know this concept later. This way we can follow SOLID principle in more better way.













   [CODE]: <https://gitlab.httpcart.com/appliance-web/anurag>
   [article]: <https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design>
   [course_link]: <https://www.udemy.com/course/spring-hibernate-tutorial/>
   [demohibernate]: <https://github.com/anuragpor/DemoHibernate/tree/master>
   [demoMVC]: <https://github.com/anuragpor/DemoSpringMVC>
   [springdemo]: <https://github.com/anuragpor/Spring-Framework-Demo-Application>
   [springdemoannotation]: <https://github.com/anuragpor/springannotationdemo>
   [springMVC]: <https://github.com/anuragpor/springMVC>
   [commandexec]: <https://github.com/anuragpor/ExecuteShellCommandRuntime>
   [ReadAndWrite]: <https://github.com/anuragpor/ReadAndWriteJava>
   [logger]: <https://github.com/anuragpor/logger>
