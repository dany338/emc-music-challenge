/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { createCustomEqual } from "fast-equals";
import {
  Container,
  UserLocation,
  Welcome,
  GroupFields,
} from './styled';
import useTermsAndConditions from '../../hooks/useTermsAndConditions';

const ButtonsOrder = lazy(() => import('../ButtonsOrder'));

const render = (status: Status) => {
  console.log(status);
  switch (status) {
    case Status.LOADING:
      return <h1>{status}</h1>;
    case Status.FAILURE:
      return <h1>{status}</h1>;
    case Status.SUCCESS:
      return <h1>{status}</h1>;
  }
};
// https://developers.google.com/maps/documentation/javascript/react-map
// https://codesandbox.io/embed/github/googlemaps/js-samples/tree/sample-react-map
// AIzaSyA-a0qAayLrjLpp1WHFPGPfeteJzJXD2iQ
// https://www.npmjs.com/package/@googlemaps/react-wrapper

interface MapProps extends google.maps.MapOptions {
style: { [key: string]: string };
onClick?: (e: google.maps.MapMouseEvent) => void;
onIdle?: (map: google.maps.Map) => void;
}

const Map: React.FC<MapProps> = ({
onClick,
onIdle,
children,
style,
...options
}) => {
const ref = React.useRef<HTMLDivElement>(null);
const [map, setMap] = React.useState<google.maps.Map>();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

// because React does not do deep comparisons, a custom hook is used
// see discussion in https://github.com/googlemaps/js-samples/issues/946
useDeepCompareEffectForMaps(() => {
  if (map) {
    map.setOptions(options);
  }
}, [map, options]);

React.useEffect(() => {
  if (map) {
    ["click", "idle"].forEach((eventName) =>
      google.maps.event.clearListeners(map, eventName)
    );

    if (onClick) {
      map.addListener("click", onClick);
    }

    if (onIdle) {
      map.addListener("idle", () => onIdle(map));
    }
  }
}, [map, onClick, onIdle]);

return (
  <>
    <div ref={ref} style={style} />
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // set the map prop on the child component
        return React.cloneElement(child, { map });
      }
    })}
  </>
);
};

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
const [marker, setMarker] = React.useState<google.maps.Marker>();

React.useEffect(() => {
  if (!marker) {
    setMarker(new google.maps.Marker());
  }

  // remove marker from map on unmount
  return () => {
    if (marker) {
      marker.setMap(null);
    }
  };
}, [marker]);

React.useEffect(() => {
  if (marker) {
    marker.setOptions(options);
  }
}, [marker, options]);

return null;
};

const deepCompareEqualsForMaps = createCustomEqual(
(deepEqual) => (a: any, b: any) => {
  if (
    isLatLngLiteral(a) ||
    a instanceof google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof google.maps.LatLng
  ) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }

  // TODO extend to other types

  // use fast-equals for other objects
  return deepEqual(a, b);
}
);

function useDeepCompareMemoize(value: any) {
const ref = React.useRef();

if (!deepCompareEqualsForMaps(value, ref.current)) {
  ref.current = value;
}

return ref.current;
}

function useDeepCompareEffectForMaps(
callback: React.EffectCallback,
dependencies: any[]
) {
React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

const TermsAndConditions = () => {
  const [
    ref,
    latitude,
    longitude,
    buttons,
  ] = useTermsAndConditions();

  return (
    <Container>
      <UserLocation>
        <Wrapper apiKey={`AIzaSyA-a0qAayLrjLpp1WHFPGPfeteJzJXD2iQ`} render={render}>
          {(latitude && longitude) ? (
            <Map
              center={{ lat: latitude, lng: longitude }}
              zoom={18}
              style={{ flexGrow: "1", height: "100%", width: "100%" }}
            >
              <Marker position={{ lat: latitude, lng: longitude }} />
            </Map>
          ) : <div>loading...</div>}
        </Wrapper>
      </UserLocation>
      <Welcome>
        <p>
          Terms and conditions refer to the contractual rights and obligations of a party to any contract.
          They refer to the broader concept of guidelines that parties must follow in an agreement.
          Your business can create them for any formalized business agreement.
        </p>
        <p>
          Terms and conditions refer to the contractual rights and obligations of a party to any contract.
          They refer to the broader concept of guidelines that parties must follow in an agreement.
          Your business can create them for any formalized business agreement.
        </p>
        <p>
          Terms and conditions refer to the contractual rights and obligations of a party to any contract.
          They refer to the broader concept of guidelines that parties must follow in an agreement.
          Your business can create them for any formalized business agreement.
        </p>
        <GroupFields>
          <ButtonsOrder buttons={buttons} />
        </GroupFields>
      </Welcome>
    </Container>
  );
};

export default TermsAndConditions;
