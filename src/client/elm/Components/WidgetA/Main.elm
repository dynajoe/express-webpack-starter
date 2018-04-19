module Components.WidgetA.Main exposing (..)

import Html exposing (Html, div, button, text)
import Html.Events exposing (onClick)


type Msg
    = Increment
    | Decrement
    | NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( model + 1, Cmd.none )

        Decrement ->
            ( model - 1, Cmd.none )

        NoOp ->
            ( model, Cmd.none )


type alias Model =
    Int


initialModel : Model
initialModel =
    0


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]


main =
    Html.program
        { init = ( initialModel, Cmd.none )
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }
