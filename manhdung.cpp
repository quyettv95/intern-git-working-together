// C1   

   
#include<iostream>
#include<algorithm>
using namespace std;
int cnt[1000001] = {0};
int main(){
    int n;
    cin >>n;
    int a[n];
    for(int i=0 ;i<n;i++)
    {
        cin >> a[i];
        cnt[a[i]]++;
    }
    int max1 =0 , max2 =0;
    for(int i=0  ;i<n;i++)
    {
        if(cnt[a[i]]>=max1)
        {
            max1 = cnt[a[i]];
        }
        else if(cnt[a[i]]>=max2 && cnt[a[i]] < max1)
        {
            max2 =cnt[a[i]];
        }
    }
    for(int i=0 ;i<n;i++)
    {
        if(max2==cnt[a[i]])
        {
            cout << a[i] << " ";
            break;
        }
    }
    return 0;
}
   


