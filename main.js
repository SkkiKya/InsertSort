class InsertSort
{
  static sort(arrays)
  {
    for (var i = 0; i < arrays.length; i++)
    {
      var insertElement = arrays[i]; //並べられていない新しい要素を取得する

      var insertPosition = i;
      for (var j = insertPosition - 1; j >= 0; j--)
      {
        if (insertElement < arrays[j]) // 新しい要素がソートされた要素より小さい場合、右にシフト
        {
          arrays[j + 1] = arrays[j];
          insertPosition--;
        }
      }
      arrays[insertPosition] = insertElement; //新しい要素を挿入する
    }
  }
}
