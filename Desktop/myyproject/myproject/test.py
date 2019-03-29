import numpy as np
array = np.array([[1,2,3],
                  [2,3,4]])
print(array.ndim)
print(array.shape)

array= np.array([[-0.57098887, -0.4274751 , -0.38459931, -0.58593526],
         [-0.22279713, -0.51723555,  0.82462029,  0.05319973],
         [ 0.67492385, -0.69294472, -0.2531966 ,  0.01403201],
         [ 0.41086611,  0.26374238,  0.32859738, -0.80848795]])
print(array)
print("\n")
print(array[:2])
print("\n")
print(array[:,:2])