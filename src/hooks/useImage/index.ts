/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const useImage = (fileName: string) => {
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ error, setError ] = useState<any | null>(null)
  const [ image, setImage ] = useState<any | null>(null)
  const [ , setDidMount ] = useState<boolean>(false);

  const fetchImage = async () => {
    try {
      console.log(fileName);
      const response = await import(`../../assets/logo/${fileName}`); // change relative path to suit your needs
      setImage(response.default)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setDidMount(true);
    fetchImage();
    return () => {
      setDidMount(false);
    }
  }, [fileName]);

  return [
    loading,
    error,
    image,
  ];
};

export default useImage;