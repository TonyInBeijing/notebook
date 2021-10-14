# 循环

# for-in 循环
names = ["1", "2", "3"]
for name in names:
    print(name)

sum = 0
for x in range(len(names)):
    sum = sum + x
print(sum)

# while 循环
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)

# break 跳出循环
n = 1
while n <= 100:
    if n > 10:
        break
    print(n)
    n = n + 1
print("end")

# continue 跳过当前这次循环，直接开始下一次循环

n = 1
while n < 10:
    n = n + 1
    if n % 2 == 0:
        continue
    print(n)