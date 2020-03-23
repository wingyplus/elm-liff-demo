port module Liff.Effect exposing (liffInbound, liffOutbound)

{-| Port module for interacting with LIFF.
-}

import Liff exposing (Message(..))


{-| A LIFF outbound port.
-}
port liffOutbound : Liff.Outbound msg


{-| A LIFF inbound port.
-}
port liffInbound : Liff.Inbound msg
