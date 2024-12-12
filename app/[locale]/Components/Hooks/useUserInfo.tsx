import  { useEffect, useState } from 'react'

const useUserInfo = () => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
      
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);
    }, []);

    return username
}

export default useUserInfo;