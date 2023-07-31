import tensorflow as tf


class myCallback(tf.keras.callbacks.Callback):
    def on_batch_end(self, batch, logs={}):
        if (logs.get("loss") < 0.4):
            self.model.stop_training = True


callbacks = myCallback()

mnist = tf.keras.datasets.fashion_mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()
train_images_scaled = train_images / 255
test_images_scaled = test_images / 255

model = tf.keras.models.Sequential([
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(512, activation=tf.nn.relu),
    tf.keras.layers.Dense(10, activation=tf.nn.softmax)
])

model.compile(optimizer="adam",
              loss="sparse_categorical_crossentropy", metrics=["accuracy"])

model.fit(train_images_scaled, train_labels, epochs=5, callbacks=[callbacks])

