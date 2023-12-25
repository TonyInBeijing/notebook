'''
Author: TonyInBeijing
Date: 2023-12-18 23:06:13
LastEditors: TonyInBeijing
LastEditTime: 2023-12-25 21:32:03
FilePath: /notebook/tensorflow/1.hello-tensorflow.py
Description: 

'''
import tensorflow as tf

hello = tf.constant("Hello TensorFlow")

sess = tf.Session()

print(sess.run(hello))