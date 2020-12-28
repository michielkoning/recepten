import { ref } from 'vue';

export default () => {
  const list = ref([]);

  const updateList = recipeList => {
    // const items = recipeList.map(item => {
    //   return {
    //     amount: item.amount,
    //     title: item.title,
    //   };
    // });

    list.value.forEach((item, index) => {
      if (recipeList.includes(item)) {
        list.value[index].amount += item.amount;
        // console.log(list.value[index].amount);
      }
    });
    list.value = [...list.value, ...recipeList];
  };
  return {
    updateList,
    list,
  };
};
