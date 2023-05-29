'''
Author: TonyInBeijing
Date: 2023-05-29 15:28:34
LastEditors: TonyInBeijing
LastEditTime: 2023-05-29 16:12:48
FilePath: /notebook/tensorflow-study/src/1.3-1个神经元的网络.py
Description: 

'''
# 测试 anaconda 环境
import tensorflow as tf
# print(tf.__version__)

from tensorflow import keras
import numpy as np
# 构建模型
model = keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
# mean_squared_err : 线性回归问题常用损失函数
model.compile(optimizer='sgd', loss='mean_squared_error')
# 准备训练数据
xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
ys = np.array([-3.0, -1.0, 1.0, 3.0, 5.0, 7.0], dtype=float)
# 训练模型
model.fit(xs, ys, epochs=500)
# 使用模型
print(model.predict([10.0]))
