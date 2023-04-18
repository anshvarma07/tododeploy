#include<iostream>
#include<vector>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--){
        int n;
        int x;
        cin>>n;
        cin>>x;
        int arr[n];
        for (int i = 0; i < n; i++)
        {
            cin>>arr[i];
        }
        
        int count=0;
        for (int i = 0; i < n; i++)
        {
            if (arr[i]>x)
            {
                count++;
            }
            else count=count+0;
        }
        cout<<count<<endl;

        
    }
    return 0;
}
