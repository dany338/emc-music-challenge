const dateInputMask = (e: any) =>{
  if(e.keyCode < 47 || e.keyCode > 57) {
    e.preventDefault();
  }

  const len = e.target.value.length;

  if ((len !== 1 || len !== 3) && e.keyCode == 47) {
    e.preventDefault();
  }

  if (len === 2) {
    e.target.value.value += '/';
  }
};


export default dateInputMask;