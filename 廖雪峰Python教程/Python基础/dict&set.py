# 使用dict和set

# dict
d = {"a":1,"b":2,"c":3}
print(d["a"])

d["d"] = 4
print(d)

# 判断key是否存在
print("e" in d)
print(d.get("e",-1))

# 删除key
d.pop("d")
print(d)

# set
s = set([1,2,3])

# 重复元素自动过滤
s = set([1,1,2,2,3,4])
print(s)

# 添加元素
s.add(5)
print(s)

# 删除元素
s.remove(5)
print(s)