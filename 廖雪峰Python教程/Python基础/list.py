# 使用list和tuple

# 无序列表：list
list = ["1","2","3"]
print(list)
print(len(list))
print(list[-1]) # 取列表最后一个元素
print(list[-2]) # 取列表倒数第二个元素，以此类推

# 列表增&删&改
# 增
list.append("4") # 追加元素至末尾
print(list) # ['1', '2', '3', '4']

list.insert(1,"1.5") # 插入到指定位置
print(list)

# 删
list.pop() # 删除末尾元素
print(list)
list.pop(1) # 删除指定位置
print(list)

# 改
list[1] = "1.5"
print(list)

# 有序列表（元组）：tuple

tuple=("1","2","3")

# 定义一个只有一个元素的元组
tuple=(1,)


