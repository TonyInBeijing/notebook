'''
Author: TonyInBeijing
Date: 2023-05-31 16:17:05
LastEditors: TonyInBeijing
LastEditTime: 2023-05-31 21:06:33
FilePath: /notebook/tensorflow-study/src/2.3-构造神经网络模型.py
Description: 

'''
import tensorflow as tf
from tensorflow import keras
import numpy as np

fashion_mnist = keras.datasets.fashion_mnist

(train_images, train_labels), (test_images,
                               test_labels) = fashion_mnist.load_data()

model = keras.Sequential()
model.add(keras.layers.Flatten(input_shape=(28, 28)))
model.add(keras.layers.Dense(128, activation=tf.nn.relu))
model.add(keras.layers.Dense(10, activation=tf.nn.softmax))
# 将数值转化成0-1的数，效果更好
train_images = train_images / 255
model.compile(optimizer=tf.optimizers.Adam(),
              loss=tf.losses.sparse_categorical_crossentropy, metrics=['accuracy'])
model.fit(train_images, train_labels, epochs=5)
# 评估模型
# test_images = test_images / 255
# model.evaluate(test_images, test_labels)
# 测试
test_image = np.reshape(test_images[0],(1,28,28)) #! 将单张图片 reshape 成 input_shape
print(model.predict(test_image/255))
print(np.argmax(model.predict(test_image/255)))
print(test_labels[0])
