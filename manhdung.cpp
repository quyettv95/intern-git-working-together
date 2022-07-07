// C1   

#include<iostream>
#include<algorithm>
using namespace std;

int main(){
    int n;
    cin >>n;
    int a[n];
    for(int i=0 ;i<n;i++)
    {
        cin >> a[i];
    }
    sort(a,a+n , greater<int>());
    cout << a[1];
}


//C2 
// #include<iostream>
// using namespace std;

// int find(int a[], int n){
//     int first, second;
//     if (a[0] > a[1]){
//         first = a[0];
//         second = a[1];
//     }else{
//         first = a[1];
//         second = a[0];
//     }
//     for(int i = 2; i < n; i++){
//         if(a[i] >= first){
//             second = first;
//             first = a[i];
//         }else if (a[i] > second){
//             second= a[i];
//         }
//     }
//     return second;
// }

// int main()
// {
//     int n;
//     cin >> n;
//     int a[n];
//     for(int i=0 ;i<n;i++)
//     {
//         cin >>a[i];
//     }
//     cout << find(a ,n);
// }