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

# 必选参数在前，默认参数在后
# 当函数有多个参数时，把变化大的参数放在前面，变化小的参数放在后面。变化小的参数就可以作为默认参数
# 定义默认参数要牢记一点：默认参数必须指向不变对象 !!!


# 可变参数
def calculate(*numbers):
    sum = 0
    for num in numbers:
        sum = sum + num
    print(sum)


calculate(1, 2, 3, 4)

# 关键字参数
# 关键字参数在函数内部自动组装成一个dict


def person(name, age, **kw):
    print(name, age, kw)


person("Tony", 25, nickname="sb")


## 命名关键字参数
def person(name, age, *, city, job):
    print(name, age, city, job)


# 参数组合


## 在Python中定义函数，可以用必选参数、默认参数、可变参数、关键字参数和命名关键字参数，这5种参数都可以组合使用。
## 但是请注意，参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。
def f1(a, b, c=0, *args, **kw):
    print(a, b, c, args, kw)
