'''
Author: TonyInBeijing
Date: 2023-12-14 10:57:06
LastEditors: TonyInBeijing
LastEditTime: 2023-12-15 10:23:14
FilePath: /notebook/python/string.py
Description: 

'''
print("hello world!")

a, b = 1, 2
print(a, b)

x = 123
print(f"x的值是{x}")

stringx = "Hello Python"

print("H" in stringx)

print("o" not in stringx)

print(stringx + stringx)

print(stringx * 3)

print(stringx[0])

print(stringx[-1]) # 最后一个字符

print(stringx[0:3])

print(stringx.__len__()) # 长度

print(stringx.count("H")) 

print(",".join(stringx))

print("x,y,z".split(","))