# WEB2040 Final Exam

1. Which of the following is a valid insert statement in mongodb? (5 pts)  
    1. db.test.insert({x:2,y:"apple"}) <-- Answer
    2. db.test.push({x:2,y:"apple"})  
    3. db.test.insert({"x":2} {"y":"apple"})  
    4. db.test.insert({"x":2}, {"y":"apple"})  

2. Given a collection named books within a database named library, write the statement you would use to query all the contents of the collection in such a way that the results are displayed in JSON format with one property-value pair per line. (5 pts)   
  Answer --> db.books.find().pretty());

    Dada una coleccion llamada books dentro de una base de datos llamada library, escriba el comando que usted utilizaria para extraer todos los contenidos de la coleccion de tal manera que los resultados salgan en formato JSON con una propiedad por linea (resultados impresos de forma bonita).  


3. A query may include a ___________ that specifies the fields from the matching documents to return. (5 pts)  
    a. selection  
    b. projection <-- Answer
    c. union  
    d. None of the mentioned  

4. MongoDB stores all documents in: (5 pts)   
    a. tables  
    b. collections <-- Answer
    c. rows  
    d. All of the mentioned  

5. If you want to **change** an existing collection in mongodb, you must use the following command: (5 pts)  
    a. insert  
    b. delete then insert  
    c. update <-- Answer
    d. None of the above  

6. Given a collection named students, where the documents have first_name and last_name properties, how would you write a mondogb query that looks up all students with the last name "Castro"? (5 pts)  
  Answer --> db.students.find({last_name: "Castro"});

    Dada una coleccion llamada students, donde los documentos tienen campos de nombre first_name y last_name, como escribiria un query en mongodb para encontrar a todos los estudiantes que tengan el apellido "Castro"?

8. Do all the problems in this page: http://sqlzoo.net/wiki/Guest_House_Assessment_Easy (40 pts)
  Question 1.
    Answer -->  SELECT booking_date, nights
                FROM booking
                WHERE guest_id = 1183

  Question 2.
    Answer -->  SELECT arrival_time, first_name, last_name
                FROM booking
                JOIN guest
                ON booking.guest_id = guest.id
                WHERE booking_date = '2016-11-05'
                ORDER BY arrival_time;

  Question 3.
    Answer -->  SELECT booking_id, room_type_requested, occupants, amount
                FROM booking a
                JOIN rate b
                ON a.room_type_requested = b.room_type
                AND a.occupants = b.occupancy
                WHERE booking_id in (5152, 5165, 5154, 5295);

  Question 4.
    Answer -->  SELECT first_name, last_name, address
                FROM booking
                JOIN guest
                ON guest_id = guest.id
                WHERE room_no = 101
                AND booking_date='2016-12-03'

  Question 5.
    Answer -->  SELECT guest_id, count(nights), sum(nights)
                FROM booking
                WHERE guest_id in (1185, 1270)
                GROUP BY guest_id;

9. Do any two of the problems on this page: http://sqlzoo.net/wiki/Guest_House_Assessment_Medium (20pts)
  Question 6.
    Answer -->  SELECT SUM(nights * amount)
                FROM booking a
                JOIN guest b
                ON a.guest_id = b.id
                JOIN rate c
                ON a.room_type_requested = c.room_type
                AND occupants = occupancy
                WHERE b.first_name = 'Ruth'
                AND b.last_name = 'Cadbury';


  Question 8.
    Answer -->  SELECT last_name, first_name, address, SUM(nights)
                FROM
                    (SELECT last_name, first_name, address,
                    COALESCE(nights, NULL, 0) as nights
                    FROM booking
                    RIGHT JOIN guest
                    ON guest.id = booking.guest_id
                    WHERE address
                    LIKE 'Edinburgh%') as a
                GROUP BY a.last_name, a.first_name;

//======================
//==== EXTRA CREDIT ====
//======================

  Question 9.
    Answer -->  SELECT booking_date,
                COUNT(arrival_time)
                FROM booking
                WHERE booking_date
                BETWEEN '2016-11-25'
                AND '2016-12-01'
                GROUP BY booking_date;

  Question 10.
    Answer -->  SELECT SUM(occupants)
                FROM booking
                WHERE booking_date + INTERVAL nights
                DAY > '2016-11-21'
                AND booking_date <= '2016-11-21'

10. Create a node project named notes-backend. This project should meet the following criteria:
    1. There should be a **Note** model that has the following attributes:
        1. Decription
        2. Created Date
        3. Author
    2. The server should connect to mongodb using mongoose
    3. There should be a route capable of displaying all the contents of a database called notes-app and a collection called notes. The results should be sent back to the client in json format. The route should be called "showallnotes"
    4. Put the answers to the text questions and the screenshots to the results of the SQL problems in this repo, then submit to Canvas.
