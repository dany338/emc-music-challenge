/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { orderTabAtom } from '../../atoms/payment';

const useTermsAndConditions = () => {
  const ref = useRef<any>();
  const [ latitude, setLatitude ] = useState<any | null>(null);
  const [ longitude, setLongitude ] = useState<any | null>(null);
  const [ isLoading, ] = useState<boolean>(false);
  const [ , setOrderTab ] = useAtom(orderTabAtom);
  const [ , setDidMount] = useState<boolean>(false);

  const buttons = useMemo(() => ([{ id: 1, text: 'BACK', type: 'button', isLoading, onClick: () => setOrderTab(0) }, { id: 2, text: 'CONTINUE', type: 'button', isLoading, onClick: () => setOrderTab(2) }]), [isLoading]);

  const getPosition = useCallback(
    () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
          console.log("Latitude is watchPosition:", position.coords.latitude, position);
          console.log("Longitude is watchPosition:", position.coords.longitude);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          // new window.google.maps.Map(ref.current, {
          //   center: {
          //     lat: position.coords.latitude,
          //     lng: position.coords.longitude
          //   },
          //   zoom: 8,
          // });
        });
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is getCurrentPosition:", position.coords.latitude);
          console.log("Longitude is getCurrentPosition:", position.coords.longitude);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          // new window.google.maps.Map(ref.current, {
          //   center: {
          //     lat: position.coords.latitude,
          //     lng: position.coords.longitude
          //   },
          //   zoom: 8,
          // });
        });
      }
    },
    [latitude, longitude],
  );

  useEffect(() => {
    setDidMount(true);
    getPosition();
    return () => {
      setDidMount(false);
    }
  }, [latitude, longitude]);

  return [
    ref,
    latitude,
    longitude,
    buttons,
  ];
};

export default useTermsAndConditions;