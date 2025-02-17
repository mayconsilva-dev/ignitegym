import { 
    ScrollView, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard 
} from "react-native";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView 
                        contentContainerStyle={{ paddingBottom: 36 }} 
                        keyboardShouldPersistTaps="handled"
                    >
                        <Center mt="$6" px="$10">
                            <UserPhoto 
                                source={{ uri: "https://github.com/mayconsilva-dev.png"}} 
                                alt="Foto do usuário"
                                size="xl"
                            />

                            <TouchableOpacity>
                                <Text 
                                    color="$green500"
                                    fontFamily="$heading"
                                    fontSize="$md"
                                    mt="$2"
                                    mb="$8"
                                > 
                                    Alterar Foto 
                                </Text>
                            </TouchableOpacity>

                            <Center w="$full" gap="$4">
                                <Input placeholder="Nome" bg="$gray600"/>
                                <Input value="mayconsilva@gmail.com" bg="$gray600" isReadOnly/>
                            </Center>

                            <Heading 
                                alignSelf="flex-start"
                                fontFamily="$heading"
                                color="$gray200"
                                mt="$12"
                                mb="$2"
                            >
                                Alterar Senha
                            </Heading>

                            <Center w="$full" gap="$4">
                                <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry/>
                                <Input placeholder="Nova senha" bg="$gray600" secureTextEntry/>
                                <Input placeholder="Confirme a nova senha" bg="$gray600" secureTextEntry/>

                                <Button title="Atualizar"/>
                            </Center>
                        </Center>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </VStack>
    );
}
