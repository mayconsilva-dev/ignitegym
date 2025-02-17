import { useState } from "react";
import { SectionList } from "react-native"
import { Text, VStack, Heading } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "15.02.25",
            data: ["Puxada frontal", "Remada unulateral"],
        },
        {
            title: "16.02.25",
            data: ["Puxada frontal"]
        }
    ])

    return(
       <VStack>
            <ScreenHeader title="Histórico de Exercícios"/>

            <SectionList 
              sections={exercises}
              keyExtractor={(item) => item}
              renderItem={() => <HistoryCard/>}
              renderSectionHeader={({ section }) => (
                <Heading
                  fontFamily="$heading"
                  color="$gray200"
                  fontSize="$md"
                  mt="$10"
                > 
                  {section.title}
                </Heading>
              )}
              style={{ paddingHorizontal: 32 }}
              contentContainerStyle={
                exercises.length === 0 && { flex: 1, justifyContent: "center" }
              }
              ListEmptyComponent={() => (
                <Text color="$gray100" textAlign="center">
                    Não há exercícos registrados ainda. {"\n"}
                    Vamos fazer exercícios hoje?
                </Text>
              )}
            />
            
       </VStack>
    )
}