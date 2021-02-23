n = int(input())
records=[]
for row in range(n):
    records.append([])
    for col in range(0,1):
        name = input()
        score = float(input())
        records[row].append(name)
        records[row].append(score)
print(records[1])
x = list(map(lambda record: record[1], records))
x.sort()
for i in range(len(x)-1):
    x.remove(max(x))
print(x)

y = list(map(lambda record: record[1]==20.0, records))
print(y)
