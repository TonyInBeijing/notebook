'''
Author: TonyInBeijing
Date: 2023-05-29 17:33:11
LastEditors: TonyInBeijing
LastEditTime: 2023-05-29 18:36:33
FilePath: /notebook/tensorflow-study/src/2.2-加载Fashion MNIST数据集.py
Description: 

'''
# 加载 Fashion MNIST 数据集
import tensorflow as tf
from tensorflow import keras
import matplotlib.pyplot as plt
fashion_mnist = keras.datasets.fashion_mnist
(train_images, train_labels), (test_images,
                               test_labels) = fashion_mnist.load_data()

print(train_images.shape)  # 训练集数据结构
print(train_labels.shape)  # 训练标题数据结构

# 直接打印图片
plt.imshow(train_images[1])  # ! 控制台看不到可以到 Jupyter Lab 中查看



