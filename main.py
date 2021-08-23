import eel
import sqlite3
eel.init('web')

# Creating database

conn = sqlite3.connect('VLE.db')
print("Database Connection established")

cursor = conn.cursor()

# Function for getting memberData


@eel.expose
def memberInfo(memberData):

    app_id = str(memberData['app_id'])
    name = str(memberData['name'])
    service = str(memberData['service'])
    mobile = str(memberData['mobile'])
    date = str(memberData['date'])
    payment = str(memberData['payment'])

    data = (app_id, name, service, mobile, date, payment)

    # Adding member data to SQLite database

    insert = """ INSERT INTO Members VALUES (?, ?, ?, ?, ?, ? )"""
    cursor.execute(insert, data)
    conn.commit()

    memberDataArray = getData()
    eel.populateTable(memberDataArray)


# Function for giving data on page load


# Function for getting all table data

@eel.expose
def getData():

    select = """ SELECT * FROM Members """
    cursor.execute(select)
    records = cursor.fetchall()
    memberDataArray = []
    for row in records:
        memberDataDictionary = {

            'AppID': row[0],
            'Name': row[1],
            'Service': row[2],
            'Mobile': row[3],
            'Date': row[4],
            'Payment': row[5]
        }
        memberDataArray.append(memberDataDictionary)
    return memberDataArray


@eel.expose
def showData():
    memberDataArray = getData()
    eel.populateTheTable(memberDataArray)


@eel.expose
def deleteData(id):

    cursor = conn.cursor()
    cursor.execute(f"DELETE FROM members WHERE AppID={id}")
    conn.commit()


@eel.expose
def editData():
    memberDataArray = getData()
    eel.fillFields(memberDataArray)


@eel.expose
def editThisMember(member):
    app_id = str(member['app_id'])
    name = str(member['name'])
    service = str(member['service'])
    mobile = str(member['mobile'])
    date = str(member['date'])
    payment = str(member['payment'])

    data = (app_id, name, service, mobile, date, payment)

    update = f""" UPDATE Members SET AppID = ?, Name = ?, Service = ?, Mobile = ?, Date = ?, Payment = ? WHERE AppID = {app_id}; """

    cursor.execute(update, data)
    conn.commit()

    memberDataArray = getData()
    eel.populateTheTable(memberDataArray)


@eel.expose
def printTableData():
    memberDataArray = getData()
    eel.populateThePrintTable(memberDataArray)


@eel.expose
def getDataByDate(dict):
    fromdate = dict['fromdate']
    todate = dict['todate']

    if (fromdate == '' and todate == ''):
        print('Error')

    dates = (fromdate, todate)

    query = """ SELECT * FROM Members WHERE Date BETWEEN ? AND ? ; """
    cursor.execute(query, dates)
    records = cursor.fetchall()
    conn.commit()
    memberDataArray = []
    for row in records:
        memberDataDictionary = {

            'AppID': row[0],
            'Name': row[1],
            'Service': row[2],
            'Mobile': row[3],
            'Date': row[4],
            'Payment': row[5]
        }
        memberDataArray.append(memberDataDictionary)
    eel.datePopulate(memberDataArray)


@eel.expose()
def deleteAll():
    cursor = conn.cursor()
    cursor.execute(f"DELETE FROM members")
    conn.commit()
    memberDataArray = []
    eel.populateTheTable(memberDataArray)


# Start the index.html file
eel.start("index.html", size=(1400, 800))
