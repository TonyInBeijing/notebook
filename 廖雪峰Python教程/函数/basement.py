# 定义函数
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x


print(my_abs(-99))


# 空函数
def nop():
    pass


# 返回多个值


def multiReturn(age):
    return {"name": "1", "age": age}


print(multiReturn(1))

# 函数的参数


# 默认参数
def defaultValue(x, n=2):
    return x + n


print(defaultValue(1))

# 定义默认参数要牢记一点：默认参数必须指向不变对象 !!!

# 可变参数
def calculate(*numbers):
    sum = 0
    for num in numbers:
        sum = sum + num
    print(sum)
calculate(1,2,3,4) 