import mysql.connector

#KnownLocation = face_recognition.face_locations(face_recognition.load_image_file("Backend/media/images/profile/1711062345/e42cb012-17ec-433f-871e-950c8cf1eb48.png"),1,"hog")
#FaceKnown= face_recognition.face_encodings(face_recognition.load_image_file("Backend/media/images/profile/1711062345/e42cb012-17ec-433f-871e-950c8cf1eb48.png"),KnownLocation)[0]
#FaceLocation = face_recognition.face_locations(face_recognition.load_image_file("./temp.png"),1,"cnn")
#FaceEncoding = face_recognition.face_encodings(face_recognition.load_image_file("./temp.png"),FaceLocation)[0]

#print(FaceLocation)

#StrFaceEncodeing = np.array2string(FaceEncoding, separator=',')
#print(StrFaceEncodeing)
#print(type(StrFaceEncodeing))

#FaceDecode = np.fromstring(StrFaceEncodeing[1:-1], dtype=float, sep=",")
#print(FaceDecode)
#print(type(FaceDecode))

#if len(FaceKnown)> 0 and len(FaceDecode)>0:
#    match_results = face_recognition.compare_faces([FaceKnown],FaceDecode)
#    print(match_results)
#else:
#    print("err")

#image =  cv2.imread('./temp.png',1)

#(top, right, bottom, left)

#image2 = cv2.rectangle(image, (164,292),(493,639),(0,0,255), 2) #face api
#image3 = cv2.rectangle(image2, (170,312),(491,633),(0,255,0), 2) # hog
#image4 = cv2.rectangle(image3, (168,265),(520,618),(255,0,0), 2) # cnn
#cv2.imshow('image',image4)
#cv2.waitKey(0)
#cv2.destroyAllWindows()


mydb = mysql.connector.connect(
            host="35.221.107.80",
            user="peaga",
            passwd="Ltk99701299",
            database="HutechManagement",
            auth_plugin="mysql_native_password"
        )
mycursor = mydb.cursor()
sql = "SELECT * FROM employeesmanagement_faceencoding"
mycursor.execute(sql)
myresult = mycursor.fetchall()
for result in myresult:
    print(result[2])