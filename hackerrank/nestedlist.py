n = int(input())
records=[]
for row in range(n):
    records.append([])
    for col in range(0,1):
        name = input()
        score = float(input())
        records[row].append(name)
        records[row].append(score)
print(records)

x = list(map(lambda record: record[1], records))
x.sort()
print(x)

second_min = 0
for i in range(len(x)):
    print(x[i])
    if x[i] != x[i+1]:
        second_min = x[i+1]
        break;
print('second_min')
print(second_min)
secondLowestGrade=[]

for record in records:
    print(record)
    print(record[1])
    if record[1] == second_min:
        secondLowestGrade.append(record[0])
    print(secondLowestGrade)

for name in sorted(secondLowestGrade):
    print(name, end='\n')