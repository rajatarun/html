def solution(X):
    y = str(X);
    arr = [];
    arr1 = [];
    for i in range(len(y)):
        z = y[:i];
        x = y[i:]
        z= z+y[i];
        ans = z+x;
        arr.append(ans);
    for i in range(len(arr)):
        arr1.append(int(arr[i]));
    print max(arr1);
    # write your code in Python
    pass
solution(1234);
