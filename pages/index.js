import React, { useState, useMemo, useEffect, useCallback } from "react";
import {useRouter} from 'next/router'

function HomePage() {
  const router = useRouter()
  useEffect(() => {
    router.push(`/Mobile`)
  }, [])

  return (
    <div></div>
  );
}

export default HomePage;
