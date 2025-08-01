---
title: "Lost In Hyperspace"
date: 2025-08-01 00:00:00 +0000
categories: [Blog]
author: toancse
tags: [introduction, htb, challanges]
---

# Introduction

Đây là một bài trong chủ đề `AI - ML` của Hackthebox được xếp vào độ khó `medium`. 

# Challange description

A cube is the shadow of a tesseract casted on 3 dimensions. I wonder what other secrets may the shadows hold.

# Solution

`%pip install seaborn scikit-learn`

*First Step:* Import file `npz` từ đề bài, sau đó phân tích. file này có 2 tables là `tokens` và `embeddings`.

```python
import numpy as np
data = np.load("token_embeddings.npz")
tokens, embeddings = data["tokens"], data["embeddings"]
print(tokens.shape)
print(embeddings.shape)
```
_Kết quả_
```raw
(110,) <class 'numpy.ndarray'>
(110, 512)
```

Theo kinh nghiệm cá nhân cứ giảm số chiều xuống và dùng scatter plot trước tiên.
Dùng TSNE, Hãy nhớ rằng từ 2 biến lấy từ data được cho ta thấy tokens và embeddings. Tôi đoán cứ 1 token chuyển sang một embedding tương ứng, biểu diễn theo thế.
```python
from sklearn.manifold import TSNE
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

reducer = TSNE(n_components=2, perplexity=30, learning_rate=5, random_state=40)
df = pd.DataFrame(reduced, columns=["x", "y"])
df["token"] = tokens
plt.figure(figsize=(10, 8))
sns.scatterplot(data=df, x="x", y="y")

for i in range(len(df)):
    plt.text(df.loc[i, "x"] + 0.5, df.loc[i, "y"], df.loc[i, "token"], fontsize=8)

plt.title("T-SNE visualization of token embeddings")
plt.grid(True)
plt.show()
```

Ta thấy chữ `HTB{.....}` là phần được tôi đã khoanh đỏ trong hình.

![Result](assets\a_08012025\image.png){: width="972" height="589" }
_Kết quả sau khi chạy_